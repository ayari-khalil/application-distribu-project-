package com.tn.skillexchange.skillexchange.controller;

import com.tn.skillexchange.skillexchange.entity.Badge;
import com.tn.skillexchange.skillexchange.entity.PointHistory;
import com.tn.skillexchange.skillexchange.entity.UserProgress;
import com.tn.skillexchange.skillexchange.service.GamificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gamification")
public class GamificationController {

    private final GamificationService gamificationService;

    // Constructeur manuel pour l'injection de dépendances
    public GamificationController(GamificationService gamificationService) {
        this.gamificationService = gamificationService;
    }

    // ➕ Ajouter des points
    @PostMapping("/points")
    public ResponseEntity<String> addPoints(@RequestBody PointHistory request) {
        gamificationService.addPointsToUser(request.getUserId(), request.getPointsEarned(), request.getReason());
        return ResponseEntity.ok("Points ajoutés avec succès !");
    }

    // 🏅 Lister les badges d’un utilisateur
    @GetMapping("/badges/{userId}")
    public ResponseEntity<List<Badge>> getBadges(@PathVariable Long userId) {
        return ResponseEntity.ok(gamificationService.getBadgesByUser(userId));
    }

    // 📈 Afficher la progression
    @GetMapping("/progress/{userId}")
    public ResponseEntity<UserProgress> getProgress(@PathVariable Long userId) {
        UserProgress progress = gamificationService.getProgressByUser(userId);
        if (progress == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(progress);
    }

    // 📜 Historique des points
    @GetMapping("/history/{userId}")
    public ResponseEntity<List<PointHistory>> getHistory(@PathVariable Long userId) {
        return ResponseEntity.ok(gamificationService.getHistoryByUser(userId));
    }
}
