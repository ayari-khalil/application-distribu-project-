package com.tn.skillexchange.skillexchange.service;

import com.tn.skillexchange.skillexchange.entity.Badge;
import com.tn.skillexchange.skillexchange.entity.PointHistory;
import com.tn.skillexchange.skillexchange.entity.UserProgress;
import com.tn.skillexchange.skillexchange.repository.BadgeRepository;
import com.tn.skillexchange.skillexchange.repository.PointHistoryRepository;
import com.tn.skillexchange.skillexchange.repository.UserProgressRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class GamificationService {

    private final UserProgressRepository userProgressRepository;
    private final PointHistoryRepository pointHistoryRepository;
    private final BadgeRepository badgeRepository;

    // Constructeur manuel pour l'injection des dépendances
    public GamificationService(UserProgressRepository userProgressRepository,
                               PointHistoryRepository pointHistoryRepository,
                               BadgeRepository badgeRepository) {
        this.userProgressRepository = userProgressRepository;
        this.pointHistoryRepository = pointHistoryRepository;
        this.badgeRepository = badgeRepository;
    }

    public void addPointsToUser(Long userId, int points, String reason) {
        // Récupération de la progression utilisateur ou création
        UserProgress progress = userProgressRepository.findByUserId(userId)
                .orElse(new UserProgress(userId, 0, 0));

        // Ajout des points
        int previousLevel = progress.getLevel();
        progress.addPoints(points);
        userProgressRepository.save(progress);

        // Historique des points
        PointHistory history = new PointHistory(userId, points, reason, LocalDateTime.now());
        pointHistoryRepository.save(history);

        // Vérifier si un nouveau badge doit être attribué
        if (progress.getLevel() > previousLevel) {
            assignBadge(userId, "Niveau " + progress.getLevel(), "Atteint le niveau " + progress.getLevel());
        }
    }

    public void assignBadge(Long userId, String title, String description) {
        Badge badge = new Badge(userId, title, description, LocalDateTime.now());
        badgeRepository.save(badge);
    }

    public List<Badge> getBadgesByUser(Long userId) {
        return badgeRepository.findByUserId(userId);
    }

    public List<PointHistory> getHistoryByUser(Long userId) {
        return pointHistoryRepository.findByUserIdOrderByDateDesc(userId);
    }

    public UserProgress getProgressByUser(Long userId) {
        return userProgressRepository.findByUserId(userId).orElse(null);
    }
}
